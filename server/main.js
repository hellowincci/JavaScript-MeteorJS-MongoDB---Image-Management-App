import {
    Meteor
} from 'meteor/meteor';
Images = new Mongo.Collection('image');
Meteor.startup(() => {
    // code to run on server at startup
});
Meteor.methods({
    'createImg': function(imgSourceVar, altTextVar, imgDescVar, currentUserId, date, userVar) {
        Images.insert({
            imgSource: imgSourceVar,
            userName: userVar,
            altText: altTextVar,
            imgDesc: imgDescVar,
            createdBy: currentUserId,
            date: date
        });
    },
    'removeImg': function(imgID) {
        Images.remove({
            _id: imgID
        });
    },
    'updateImage': function(imgID, altTextVar, imgDescVar) {
        Images.update(imgID, {
            $set: {
                altText: altTextVar,
                imgDesc: imgDescVar
            }
        });
    },
    'updateRating': function(rating, image_id) {
        Images.update({
            _id: image_id
        }, {
            $set: {
                rating: rating
            }
        });
    }
});
Meteor.publish('theImage', function() {
    return Images.find()
})
