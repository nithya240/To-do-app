import axios from "axios"

class HelloWorldPathVariableService
{
    executeHelloWorldService(){
       return axios.get("http://localhost:8080/hello-world");
     //   console.log('Executed Service')
}
executeHelloWorldBeanService(){
    return axios.get("http://localhost:8080/hello-world-bean");
}

executeHelloWorldPathVariableService(name){
    return axios.get(`http://localhost:8080/hello-world/path-variable/${name}`);
}

}
export default new HelloWorldPathVariableService