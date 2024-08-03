#### Problem 1:

- Description: the meta tags are missing and need to be entered between - the < head > tags . 

#### Problem 2:

- Description: the link rel tag and href style tag is  also missing and also needs to be entered in the < head > tags 

#### Problem 3:

- Description: the .inline-style { font-weight: bold; } doesn't belong on the html page, it belongs on the .css style sheet . Solution: delete all of < style >
    .inline-style {
      font-weight: bold;
    }
  < /style > from the index.html and code the .inline-style in the css if necessary. 

#### Problem 4:
- Description: the img src tag does not need to be closed and it is missing an alt tag. Also, lowering the width and height ( &w=6000&h=4000 ) manually will better the site's performance. Solution:   adjusting the w & h in < img src="https://images.pexels.com/photos/1276553/pexels-photo-1276553.jpeg? :: &w=600&h=400 :: " alt="upside down cat" id="largeImage"> 

#### Problem 5:
- Description: the cookies from using an image from a third party site lowers a site's performance. Solution: saving the image on your desktop, creating an image folder in vs code and adjusting the img src tag will solve the 3rd party cookie problem -> < img src="img/cattwist.jpg" id="largeImage" alt="upside down cat">

#### Problem 6:
- Description: the !important is not a style property and doesn't need to be there. Solution: delete !important from the css code. body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f0f0f0;
}

#### Problem 7:
- Description: the #img-container { width: 600px; margin: auto; } isn't a problem but the width in the html page that was originally 6000x4000 affected the site performance. Solution: adjust the width and height size to a smaller width and height that make the site perform better.


#### Problem 8:
- Description: .unused-class-1 , 2, & 3 are not needed and do not reflect on the site at all. Solution: the unused-classes & { color: blue; background-color: black; } can be completely deleted. 

#### Problem 9: n/a

#### Problem 10:

### Step 3: Propose Solutions

entered above.

#### Problem 1:

- Solution: [ entered with the problems above ]

#### Problem 2:

- Solution: [ same ]


### Step 4: Reflect

After completing the exercise, write a brief reflection on what you learned from this debugging and optimization process. Discuss any new insights you gained and how you might apply these skills in future projects. 
I learned that it's important to recognize where meta tags belong and that unnecessary style classes,  in addition to file size 

## Submission

Submit this README.md file with all the problems documented and solved, along with your reflection. Ensure that your explanations are clear and concise.

---

This exercise is an opportunity to practice critical web development skills. Pay close attention to detail and think about how each issue affects the overall performance and user experience of the web application.