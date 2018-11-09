# Review Questions

## What is Node.js?
Node.js is an open source JS runtime environment that runs on various platforms.
After over 20 years of stateless-web based on the stateless request-response paradigm, we finally have web applications with real-time, two-way connections, where both the client and server can initiate communication, allowing them to exchange data freely. With it, you can build anything from small command line tools to HTTP servers that power dynamic websites.
 

## What is Express?
Express is a Node.js framework  that provides a robust set of features for web and mobile applications. It helps organize your web app into an MVC architecture(model-view-controller) on the server side.
## Mention two parts of Express that you learned about this week.
Different types of middleware (custom, built in, third party) and the Quartet. (Req, Res, Next, Err)
## What is Middleware?
a layer of software that connects client and back-end systems and 'glues' programs together.
## What is a Resource?
Accessible through URL through HTTP methods. In Node.js, a resource can be anything (item/object)
## What can the API return to help clients know if a request was successful?
res.status codes(200)

## How can we partition our application into sub-applications?
By separating route handlers into different files.
## What is express.json() and why do we need it?
Before we had to install bodyparser, now it is built in and we just have to use express.json to parse json data.