pipeline {
  agent any
  stages {
    stage('Set BUILD_ID') {
      steps {
        sh 'export BUILD_ID=${BUILD_ID}'
      }
    }

    stage('Removing old containers') {
      steps {
        sh 'docker rm -f $(docker ps -a | awk '/test2/{print $1}') || echo "THERE ARE NOT ANY CONTAINER WHICH CONTAIN TEST2"'
      }
    }

    stage('Building new image') {
      steps {
        sh 'docker build -t front-${GIT_BRANCH}:0.${BUILD_ID} .'
      }
    }

    stage('Deploy') {
      steps {
        sh 'docker run -ti -d -p 3030:3000 front-${GIT_BRANCH}:0.${BUILD_ID}'
      }
    }
  }
}
