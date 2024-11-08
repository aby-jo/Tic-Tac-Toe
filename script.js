function createArray(){
    array=[[],[],[]]
    return array

}
function tick(a,b){
    arr=createArray()
    arr[a][b]=1

}
function check(array_to_check){
    if(array_to_check[0][0]==array_to_check[0][1]==array_to_check[0][2]){
        console.log("Win")
    }
    else if(array_to_check[0][0]==array_to_check[1][1]==array_to_check[2][2]){
        console.log("Win")
    }
    else if(array_to_check[0][0]==array_to_check[1][0]==array_to_check[2][0]){
        console.log("Win")
    }
    else if(array_to_check[1][0]==array_to_check[1][1]==array_to_check[1][2]){
        console.log("Win")
    }
    else if(array_to_check[2][0]==array_to_check[2][1]==array_to_check[2][2]){
        console.log("Win")
    }
    else if(array_to_check[2][0]==array_to_check[1][1]==array_to_check[0][2]){
        console.log("Win")
    }
    else if(array_to_check[0][1]==array_to_check[1][1]==array_to_check[2][1]){
        console.log("Win")
    }
    else if(array_to_check[0][2]==array_to_check[1][2]==array_to_check[2][2]){
        console.log("Win")
    }
    else{
        console.log("Lose")
    }
}
tick(0,1)
tick(0,0)
tick(1,2)
check(arr)

