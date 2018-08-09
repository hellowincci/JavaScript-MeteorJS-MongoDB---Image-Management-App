# Simple Image Management App using MeteorJS and MongoDB

This project is to produce an application which manages lists of images using JavaScript library (Meteor js) and MongoDB. It allows users to perform the following functions:<br /> 
i. User sign up, login, logout and change password <br /> 
ii. Add image by providing image file name or link to the image <br /> 
iii. Delete image by clicking on the delete button correspond to each image, prompt user for confirmation before deletion <br /> 
iv. Display added image sorted by date added from recently to old <br /> 
v. Allow other user to login and add images. Allow user to filter image based on selected user<br /> 
vi. Allow user to edit the image description and alternate text dynamically and update the edited information into database<br /> 

## Prerequisites
Things you need to install/get development env running:<br/>
meteor npm install @babel/runtime@7.0.0-beta.55 <br/>
meteor add session<br/>
meteor add accounts-base<br/>
meteor add accounts-ui accounts-password<br/>
meteor add msavin:mongol<br/>
meteor add twbs:bootstrap<br/>
meteor add barbatus:stars-rating<br/>

## Demo

When the application is launched using localhost:3000, user will be prompted with a welcome message and sign in link. Since this is the first time user visit the page, it will be greeted without an username as shown in Fig. 1.

<p align="center"><img src="https://user-images.githubusercontent.com/39652136/43867259-2d3ce260-9b9b-11e8-9e30-c5a34ea1aabb.PNG">Figure 1: Elements in main page.</p>


When the sign in link is selected, user can either sign in (Fig.2) or create a new account (Fig.3).

<p align="center"><img src="https://user-images.githubusercontent.com/39652136/43867360-88b4fc7c-9b9b-11e8-8dc1-1848b13be720.PNG">
<br />Figure 2: Sign in link.</p>

<p align="center"><img src="https://user-images.githubusercontent.com/39652136/43867359-88712326-9b9b-11e8-902b-5ed34902ddd6.PNG">
<br />Figure 3: Create Account</p>

Password validation will be performed. User will be notified when the password entered is not meeting the minimum length requirement (Fig.4). This warning will be shown after user click on the button “Create account”.

<p align="center"><img src="https://user-images.githubusercontent.com/39652136/43867397-aa442606-9b9b-11e8-977e-e9504cde4936.PNG"><br \>
Figure 4: Password validation.</p>

After successfully created user’s account, user is automatically logged in and greeting is personalized based on user name as shown in Fig.5.

<p align="center"><img src="https://user-images.githubusercontent.com/39652136/43867423-c6b0945a-9b9b-11e8-932e-cfd279e8656b.PNG"><br />
Figure 5: Personalized greeting.</p>

Two options as shown in Fig. 6 allow user to sign out or change password when he/she click on the username link (top left).

<p align="center"><img src="https://user-images.githubusercontent.com/39652136/43867476-010ddbb2-9b9c-11e8-85d1-22ff8cba93de.PNG"><br />
Figure 6: Change password and Sign out option.</p>

Fig.7 shows the user interface when “change password” option is selected by user. The current password must match with the initial password used to create the account in order for the function “change password” to be executed.

<p align="center"><img src="https://user-images.githubusercontent.com/39652136/43867489-13896b3a-9b9c-11e8-9411-2636fbe31e04.PNG"><br />
Figure 7: Change password</p>

User will be prompted a successful/unsuccessful message. Example of successful password change is shown in Fig.8.

<p align="center"><img src="https://user-images.githubusercontent.com/39652136/43867501-22374940-9b9c-11e8-9866-09a29e2a1d62.PNG"><br />
Figure 8: Successful password change.</p>

Only logged in user will see the add image button. When they click on the button, a pop up window is used to obtain user input as shown in Fig. 9. Fig.10 shows an example of completed form while Fig.11 shows the output of the added image. For each added image, a list of information (Rating, Alternate text, User who added the image, Description of the image, Star symbol for user to rate and Delete button) is contained together with the image.

<p align="center"><img src="https://user-images.githubusercontent.com/39652136/43867543-3f44564a-9b9c-11e8-8791-bcd91b0dbd6d.PNG"><br />
Figure 9: Add image pop up.</p>

<p align="center"><img src="https://user-images.githubusercontent.com/39652136/43867542-3f04a716-9b9c-11e8-85b1-47709debfd68.PNG"><br />
Figure 10: Completed form.</p>

<p align="center"><img src="https://user-images.githubusercontent.com/39652136/43867571-5cda1ce4-9b9c-11e8-9fe1-f71e216b287a.PNG"><br />
  Figure 11: Image display on webpage with complete information.</p>

Additionally, user can add unlimited images into the application using the same method. Fig. 12 shows example of user adding another image, Fig. 13 displays the added image with its relevant information. Each new added image will be displayed in front of the image added previously.

<p align="center"><img src="https://user-images.githubusercontent.com/39652136/43867590-6ffff5b4-9b9c-11e8-8484-b05874a754d6.PNG"><br />
  Figure 12: Add another image.</p>

<p align="center"><img src="https://user-images.githubusercontent.com/39652136/43867610-7dddea24-9b9c-11e8-9e1e-10718d32b316.PNG"><br />
Figure 13: Display of both added image sorted by recent to older.</p>

Initially, the rating label has an empty value. User is able to rate the image by selecting the number of stars located below each image as shown in Fig. 14. The number of star will be updated in the rating column once user clicked on the star.

<p align="center"><img src="https://user-images.githubusercontent.com/39652136/43867644-9e2d7254-9b9c-11e8-9285-aecc04e85e42.PNG"><br />
  Figure 14: Rating with star symbol.</p>

The same application allows different user to login and add images. The images added will be labeled with different user as shown on Fig. 15.

<p align="center"><img src="https://user-images.githubusercontent.com/39652136/43867691-d65c6694-9b9c-11e8-991e-1aea68dde28c.PNG"><br />
Figure 15: User1 logged in and add one image shown on the left.</p>

The application allows images to be sorted based on user who added the images. When the link on user is clicked, only images created by that particular user will be shown (Fig. 16). On the same page, user can navigate to see all images by clicking on the link “Show all images” (Fig. 16 and Fig. 17).
<p align="center"><img src="https://user-images.githubusercontent.com/39652136/43867690-d61d779a-9b9c-11e8-9586-b1165e7ba801.PNG"></p>
<p align="center"><img src="https://user-images.githubusercontent.com/39652136/43867689-d5df3462-9b9c-11e8-9573-2ac9987de452.PNG"><br />
Figure 16: Showing only images added by user1</p>

<p align="center"><img src="https://user-images.githubusercontent.com/39652136/43867688-d5a5d618-9b9c-11e8-8174-519c618864fd.PNG"><br />
Figure 17: Display all images after the link “Show all images” is clicked.</p>

Finally, user can remove the image by clicking on the “delete” button. Example in Fig.18 shows the second image is deleted.
<p align="center"><img src="https://user-images.githubusercontent.com/39652136/43867687-d5684780-9b9c-11e8-8e0b-86d1224d79f4.PNG"></p>

<p align="center"><img src="https://user-images.githubusercontent.com/39652136/43867686-d524d7e8-9b9c-11e8-8c00-a846165dd9bd.PNG"><br />
Figure 18: Display after image deleted using the delete button.</p>
