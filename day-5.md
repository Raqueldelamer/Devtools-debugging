#### Problem 1:

- Description: the meta tags are missing and need to be entered between the < head > tags . Solution: enter code < head > < meta charset="UTF-8" />
    < meta name="viewport" content="width=device-width, initial-scale=1.0" /> < /head >

#### Problem 2:

- Description: the link rel tag and href style tag is also missing and also need to be entered in the < head > tags. Solution: enter code < link rel="stylesheet" href="style.css" > between the < head > </ head > , below the meta tags. 

#### Problem 3:

- Description: the .inline-style { font-weight: bold; } doesn't belong on the html page, it belongs on the .css style sheet . Solution: delete all of < style >
    .inline-style {
      font-weight: bold;
    }
  < /style > from the index.html and code the .inline-style in the css if it is necessary. 

#### Problem 4:
- Description: the img src tag does not need to be closed and it is missing an alt tag. Also, lowering the image's width and height ( &w=6000&h=4000 ) manually will better the site's performance. Solution:   adjusting the w & h in < img src="https://images.pexels.com/photos/1276553/pexels-photo-1276553.jpeg? :: &w=600&h=400 :: id="largeImage" alt="upside down cat"> 

#### Problem 5:
- Description: the cookies from using an image from a third party site can lower a site's performance. Solution: saving the image on your desktop, creating an image folder in vs code, dragging the image into the img folder, and adjusting the img src tag will solve the 3rd party cookie problem -> < img src="img/cattwist.jpg" id="largeImage" alt="upside down cat">

#### Problem 6:
- Description: the !important is not a style property and doesn't need to be there. Solution: delete !important from the css code. body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f0f0f0;
}

#### Problem 7:
- Description: the #img-container { width: 600px; margin: auto; } isn't a problem but the width in the html page that was originally 6000x4000, affected the site's performance because the file was too large. Solution: adjust the width and height size to a smaller width and height that make the site perform better. < img src="https://images.pexels.com/photos/1276553/pexels-photo-1276553.jpeg? :: &w=400&h=266 ::


#### Problem 8:
- Description: .unused-class-1 , 2, & 3 are not needed and do not reflect on the site at all. Solution: the unused-classes-1, 2, 3, & { color: blue; background-color: black; } can be completely deleted. 

#### Problem 9: n/a

#### Problem 10: 
- Description:  $('body output').append (blah blah ) ; is incorrect. To be frank, if you hadn't entered the correct code today, I would've never known the correct code at this point since this part of coding is my Achilles heel, and we haven't learned this, or if we have, my brain is so mushed up that I couldn't retain all the info. I could see that "body output" was incorrect but i couldn't figure the correct code, which is -> $('#output').append(..); thank you for that

### Step 3: Propose Solutions

- entered above.

#### Problem 1:

- Solution: [ entered with the problems above ]

#### Problem 2:

- Solution: [ entered with the problems above ]


### Step 4: Reflect

- I learned that it is extremely important to recognize that paying close attention to detail in all aspects of coding is absolutely necessary. For example, where meta tags belong and where unnecessary style classes don't belong. Also recognizing that file size affects a site's performance is vital too, whether it involves the file size that the programmer is using, or sizing it smaller in the style sheet. I've also learned that there are various ways to code that have the same outcomes, some being long and more difficult than other code that has the same result. It's necessary to learn the harder code, but I would definitely like to learn the easier way to code that saves time too.  

## Submission

- Submit this README.md file with all the problems documented and solved, along with your reflection. Ensure that your explanations are clear and concise.

---

