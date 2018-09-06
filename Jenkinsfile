pipeline {
    agent any
    stages {
        stage('frontend master Build') {
            steps {
                echo "Removing old containers if exist........"
                sh 'docker ps -f name=frontend-master -q | "xargs -- docker container stop"'
                sh 'docker ps -a -f name=frontend-master -q | xargs -- docker container rm'
                echo "Building........"
                sh 'docker-compose -f docker/docker-compose.yml up -d'
                echo "FINISHED........"
            }
        }
    }
}

