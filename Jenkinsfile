node('master') {

		repoURL = 'https://github.com/raviahujauk/MavenBionicRegTest.git'

		stage("Prepare Workspace") {
            echo 'testing'
            cleanWs()
			env.WORKSPACE_LOCAL=sh(returnStdout:true,script:'pwd').trim()
			echo"Workspace set to:"+env.WORKSPACE_LOCAL
			echo"Build time: "+env.BUILD_TIME
		}
		stage('Checkout Self') {
		git branch:'xray',credentialsId:'',url:repoURL
		}
		stage('Cucumber Tests') {
			withMaven(maven:'M3') {
				sh """
					cd ${env.WORKSPACE_LOCAL}
					mvn clean test
				"""
			}
		}
		stage('Expose report'){
			archive "**/cucumber.json"
			cucumber '**/cucumber.json'
		}
}
