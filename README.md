# JavaScript-MeteorJS-MongoDB---Image-Management-App
This project is to produce an application which manages lists of images using JavaScript library (Meteor js) and MongoDB. It allows users to perform the following functions:<br /> 
i. User sign up, login, logout and change password <br /> 
ii. Add image by providing image file name or link to the image <br /> 
iii. Delete image by clicking on the delete button correspond to each image, prompt user for confirmation before deletion <br /> 
iv. Display added image sorted by date added from recently to old <br /> 
v. Allow other user to login and add images. Allow user to filter image based on selected user<br /> 
vi. Allow user to edit the image description and alternate text dynamically and update the edited information into database<br /> 



When the application is launched using localhost:3000, user will be prompted with a welcome message and sign in link. Since this is the first time user visit the page, it will be greeted without an username as shown in Fig. 1.

![startup](https://drive.google.com/file/d/1IHab7jO_zv-jbaKp71diECFGC5zyeO-j/view?usp=sharing)

When the sign in link is selected, user can either sign in (Fig.2) or create a new account (Fig.3).

Password validation will be performed. User will be notified when the password entered is not meeting the minimum length requirement (Fig.4). This warning will be shown after user click on the button “Create account”.

After successfully created user’s account, user is automatically logged in and greeting is personalized based on user name as shown in Fig.5.

Two options as shown in Fig. 6 allow user to sign out or change password when he/she click on the username link (top left).

Fig.7 shows the user interface when “change password” option is selected by user. The current password must match with the initial password used to create the account in order for the function “change password” to be executed.

User will be prompted a successful/unsuccessful message. Example of successful password change is shown in Fig.8.

Only logged in user will see the add image button. When they click on the button, a pop up window is used to obtain user input as shown in Fig. 9. Fig.10 shows an example of completed form while Fig.11 shows the output of the added image. For each added image, a list of information (Rating, Alternate text, User who added the image, Description of the image, Star symbol for user to rate and Delete button) is contained together with the image.

Additionally, user can add unlimited images into the application using the same method. Fig. 12 shows example of user adding another image, Fig. 13 displays the added image with its relevant information. Each new added image will be displayed in front of the image added previously.

Initially, the rating label has an empty value. User is able to rate the image by selecting the number of stars located below each image as shown in Fig. 14. The number of star will be updated in the rating column once user clicked on the star as shown in Fig. 15.

The same application allows different user to login and add images. The images added will be labeled with different user as shown on Fig. 16.

The application allows images to be sorted based on user who added the images. When the link on user is clicked, only images created by that particular user will be shown (Fig. 17). On the same page, user can navigate to see all images by clicking on the link “Show all images” (Fig. 17 and Fig. 18).

Finally, user can remove the image by clicking on the “delete” button. Example in Fig.19 shows the second image is deleted.
