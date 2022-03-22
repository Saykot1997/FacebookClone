node {

    stage("Git Clone"){

        git branch: 'main', url: 'https://github.com/Saykot1997/FacebookClone.git'
    }

     stage("Frontend App Docker Build"){

        sh 'docker build -t saykot/facebook-clone-frontend:latest ./frontend/'
    }

     stage("Backend App Docker Build"){

        sh 'docker build -t saykot/facebook-clone-backend:latest ./Server/'
    }

    stage("Docker Login"){

        withCredentials([string(credentialsId: 'DOCKER_HUB_PASSWORD', variable: 'PASSWORD')]) {
            sh 'docker login -u saykot -p $PASSWORD'
        }
    }

    stage("Frontend Image Push to Docker Hub"){

        sh 'docker push saykot/facebook-clone-frontend:latest'
    }

    stage("Backend Image Push to Docker Hub"){

        sh 'docker push saykot/facebook-clone-backend:latest'
    }
}
 
