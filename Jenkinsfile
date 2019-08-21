pipeline {
    agent { label 'aws-agent' }
    stages {
 
        stage("Building project") {
            steps {
                echo 'Cloning git'
                git([url: 'https://github.com/jovanibrasil/jovanibrasil-app.git', branch: 'master', credentialsId: 'jovanibrasil'])
                echo 'Installing dependencies ...'
                sh 'npm install'
                echo 'Building ...'
                sh 'node --max_old_space_size=512 ./node_modules/@angular/cli/bin/ng build --prod --build-optimizer --configuration=production'
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
                echo 'TODO'
                // echo 'rm ~/workspace/blog-app ~/workspace/blog-app@tmp -rf'
            }
        }

    }
    
}