# Getting Started with FacebookClone

This is a testing purpose app to increase skill not for production

## Available Scripts

I have created frontend and backend app in a folder. To run frontend app first change directory to frontend

### `cd ./frontend/`

and after changing directory,run:

### `npm install`

That command will install all the dependencies of the app. After install all the dependencies you can run the app by run the following command.

### `npm start`

That will run the app in localhost:3000 you can see the app in localhost:3000

As the app is full stack app. So the app in depends on backend app. To  run backend app follow:

First change directory to Server

### `cd ./Server/`

and after changing directory,run:

### `npm install`

That command will install all the dependencies of the app. After install all the dependencies you can run the app by run the following command.

### `npm start`

That will run the app in localhost:8000 you can see the app in localhost:8000

Make sure your machine have mongodb install. Because this app is depends on mongodb database.


## Run the app by Docker

I have build and push the images of the app in dockerhub so it is very easy to run the app by docker if the machine have docker installed.

First you have to create a docker-compose.yaml file and copy past the following code:


```bash
version: "3.3"
services:
  facebook-clone-frontend:
    image: saykot/facebook-clone-frontend
    ports:
      - "3000:3000"
    depends_on:
      - facebook-clone-backend
      - mongo
  facebook-clone-backend:
    image: saykot/facebook-clone-backend
    ports:
      - "8000:8000"
    depends_on:
      - mongo
    environment:
      - EMAIL=<email>
      - EMAIL_PASSWORD=<password>
      - TOKENSECRATE=<secrate>
      - DATABASE_URL=<mongodbURL>
      - CLIENT_URL=http://localhost:3000
  mongo:
    image: mongo
    restart: always
    ports:
      - "27017"
    volumes:
      - mongo-data:/data/db
volumes:
  mongo-data:
    driver: local

```

Make sure change the secrate credentials your own

### After coppy and save the code. Run the script in the same directrory in the file

```bash
  docker-compose up 
```

### Run in kubersntes Cluster 

I have written kubernetes script in the kubernetes derectory. To run the app in kubernetes cluster you have to have a cluster in your machine.
It could be minikube or docker desktop kubernetes cluster.

In kubernenes derectory all file are present. To run in kubernetes cluster run the command:

First change directory to kubernetes:

```bash
  cd /kubernetes/
```

After change directory run the command

```bash
  kubectl apply -f .
```
Make sure change the secrate credentials your own

In kubernetes ingress file I have given host name as:

`saykotfacebook.io
`
So to get access the app you have to go to your hosts file and add the localhost ip address to because ingress allow only valid host so we will trick as valid host

`saykotfacebook.io`

If you are linux or mac user run
```bash
  code /etc/hosts
```

That will open vs code with a file called hosts. If you are you using docker desktop add 

`127.0.0.1	saykotfacebook.io` 

and save as root user 

Or if you are using minikube then you have to find the ip address and then add to the hosts file. Type the command to find ip address

```bash
  minikube ip
```
then copy the ip address and add to hosts file with	saykotfacebook.io  

`<minikubeipaddress> saykotfacebook.io` 
and save with root user.


If you are windows youser 

Then run command prom as adminstator 
Move into `C:\windows\system32\drivers\etc`
Then exicute `nodepad hosts`
Add `127.0.0.1	saykotfacebook.io` save and 

After that you can go `saykotfacebook.io` and run the app 

Thank you 



