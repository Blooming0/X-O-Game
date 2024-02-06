
var gridArray = [
    "0", "1", "2",
    "3", "4", "5",
    "6", "7", "8"
]
var currentTurn = "x"
var gameIsFinished = false
var gridItems = document.getElementsByClassName("box");
for (let item of gridItems) {
    item.addEventListener("click", function () {

        //game is finish 
        if (gameIsFinished) {
            alert("game is finished reset the game ")
            return
        }


        //fill the visual grid
        let value = item.getAttribute("value")
        let boxContent = document.querySelector(`.box[value="${value}"]`)
        boxContent.innerHTML = currentTurn
        //fill the logic grid


        //prevent the change in a div aftar you click it
        let index = value - 1;
        if (gridArray[index] == "x" || gridArray[index] == "o") {
            return
        }


        gridArray[index] = currentTurn
        evaluteGrid()







        function evaluteGrid() {
            if (
                //row winner
                (gridArray[0] == gridArray[1] && gridArray[1] == gridArray[2]) ||
                (gridArray[3] == gridArray[4] && gridArray[4] == gridArray[5]) ||
                (gridArray[6] == gridArray[7] && gridArray[7] == gridArray[8]) ||

                //col winner
                (gridArray[0] == gridArray[3] && gridArray[3] == gridArray[6]) ||
                (gridArray[1] == gridArray[4] && gridArray[4] == gridArray[7]) ||
                (gridArray[2] == gridArray[5] && gridArray[5] == gridArray[8]) ||

                //diagonal winner
                (gridArray[0] == gridArray[4] && gridArray[4] == gridArray[8]) ||
                (gridArray[2] == gridArray[4] && gridArray[4] == gridArray[6])
            ) {
                var winner = (currentTurn == "o" ? "o" : "x")
                gameIsFinished = true
                alert(`${winner} won!`)
            }
            var isDraw = true
            for (box of gridArray) {
                if (box != "x" && box != "o") {
                    isDraw = false
                }
            }
            if (isDraw) {
                alert("Draw!!")
                gameIsFinished = true
            }
        }

        if (currentTurn == "x") {
            currentTurn = "o"
        } else {
            currentTurn = "x"
        }

    })




}











