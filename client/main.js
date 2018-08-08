import "./main.html";
import "./main.css";
Session.set("sort", "False");
Images = new Mongo.Collection("image");
import { Accounts } from "meteor/accounts-base";
import { Session } from "meteor/session";
Accounts.ui.config({
  passwordSignupFields: "USERNAME_AND_EMAIL"
});

Template.ImageTemplate.events({
  "click #imagebtn": function(e) {
    e.preventDefault(); //prevent it from submitting the form
    //Session.set(key,value) the key to set, the new value for key
    Session.set("selectedUser", Meteor.userId());
    $("#imageModal").modal("show");
  },
  "click #showAll": function(e) {
    e.preventDefault();
    Session.set("sort", "False");
  }
});
Template.ImageTemplate.helpers({
  filterHelpers: function() {
    if (Session.get("sort") == "True") {
      return true;
    }
  }
});
Template.addImageModal.events({
  "click #save": function(e) {
    e.preventDefault();
    var imgSourceVar = document.getElementById("imgsource").value;
    var altTextVar = document.getElementById("alttext").value;
    var imgDescVar = document.getElementById("imgdescription").value;
    var currentUserId = Meteor.userId();
    var date = new Date();
    var userVar = Meteor.user().username;
    console.log(date);
    Meteor.call(
      "createImg",
      imgSourceVar,
      altTextVar,
      imgDescVar,
      currentUserId,
      date,
      userVar
    );
    console.log("The ID is clicked...");
    $("#imageModal").modal("hide");
  }
});
Template.editImageModal.events({
  "click #saveEdited": function(e) {
    e.preventDefault();
    var imgID = Session.get("selectedImg");
    var altTextVar = document.getElementById("editingAltText").value;
    var imgDescVar = document.getElementById("editingImgDescription").value;
    Meteor.call("updateImage", imgID, altTextVar, imgDescVar);
    $("#editImage").modal("hide");
  }
});
Template.displayImage.helpers({
  user: function() {
    if (Session.get("sort") == "False") {
      return Images.find(
        {},
        {
          sort: {
            date: -1
          }
        }
      ).fetch();
    } else if (Session.get("sort") == "True") {
      return Images.find(
        {
          createdBy: Session.get("filterUser")
        },
        {
          sort: {
            date: -1
          }
        }
      ).fetch();
    }
  }
});
Template.displayImage.events({
  "click #removeImg": function(e) {
    e.preventDefault();
    if (confirm("Are you sure you want to delete this image?")) {
      Meteor.call("removeImg", this._id);
    }
  },
  "click #editbtn": function(e) {
    e.preventDefault();
    Session.set("selectedImg", this._id);
    $("#editImage").modal("show");
  },
  "click .filter": function(e) {
    e.preventDefault();
    Session.set("filterUser", this.createdBy);
    Session.set("sort", "True");
  },
  "click .rate-image": function(event) {
    var rating = $(event.currentTarget).data("userrating");
    console.log(rating);
    var image_id = this.id;
    console.log(image_id);
    Meteor.call("updateRating", rating, image_id);
  }
});
Meteor.subscribe("theImage");
