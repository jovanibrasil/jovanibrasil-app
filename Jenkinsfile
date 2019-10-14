pipeline {
    agent { label 'digital-ocean-agent' }
    stages {
 
        stage("Building project") {
            steps {
                echo 'Cloning git'
                sh 'rm jovanibrasil-app -rf'
                git([url: 'https://github.com/jovanibrasil/jovanibrasil-app.git', branch: 'master', credentialsId: '9bae9c61-0a29-483c-a07f-47273c351555'])
                echo 'Installing dependencies ...'
                sh 'npm install'
                echo 'Building ...'
                sh 'npm run build --prod --build-optimizer --configuration=production --max_old_space_size=384'
            }
        }

        stage("Test project"){
            steps {
                echo 'Todo'
            }
        }

        stage("Deploy project"){
            steps {
                echo 'deploying the project ...'
                sh 'rm /var/www/jovanibrasil/* -rf'
                sh 'cp ~/workspace/jovanibrasil-app/dist/jovanibrasil-app/* /var/www/jovanibrasil/ -r'
            }
        }

        stage("Remove temporary files"){
            steps {
                echo 'cleaning ...'
                sh 'rm ~/workspace/jovanibrasil-app ~/workspace/jovanibrasil-app@tmp -rf'
            }
        }

    }
    
}
