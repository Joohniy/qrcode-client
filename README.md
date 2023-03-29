

### Description Description of what was developed

Here we are dealing with the client, defining our screens from react-rout-dom v6, we render three components for this application:
The first component CreateUser, has the function of capturing and registering in our database the credentials typed in the inputs, using Axios, we send our POST request to be properly treated in our server-side nodejs, alternating between screens, using useNavigate and sending information by useLocation, we arrive at the second component.
Our second component tries to show us our QRCode, which will contain the link to our user's page, to create the QRCode, we use the react-qr-code library, passing our value in it, in this case the link to our third and final screen.
On our last screen, we render all the information that was registered in our first component, duly treated, we show the LinkedIn and GitHub links, which are rescued in our response coming from our server-side, capturing our user ID by the URL, we do the ID query and thus returning to our client all the credentials saved in the database, using an Axios GET to show our screen to the user.

Some unit tests were done, in our first component that tries to save our user's information.
