pipeline {
    agent any
    stages {
        stage('frontend master Build') {
            steps {
                echo "Removing old containers if exist........"
                sh 'docker ps -f name=frontend-master -q | xargs -r docker container stop'
                sh 'docker ps -a -f name=frontend-master -q | xargs -r docker container rm'
                echo "Building........"
                sh 'docker-compose up -d'
                echo "FINISHED........"
            }
        }
    }
}

