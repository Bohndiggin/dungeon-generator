function ranDumb(min, max) { //makes random numbers in the range specified
    return (Math.random() * (max - min)) + min
}

class Dungeon{
    constructor(xMax, yMax, history, location) {
        this.xMax = xMax
        this.yMax = yMax
        this.history = history
        this.location = location
        this.room = []        
    }
    addRooms(roomNum) {
        for(let i = 0;i<roomNum;i++) {
            let xRoomSize = Math.floor(ranDumb(5, this.xMax-this.xMax * 0.5))
            let yRoomSize = Math.floor(ranDumb(5, this.yMax-this.yMax * 0.5))
            this.room.push(new Room(xRoomSize, yRoomSize))
        }
    }
    arrangeRooms() {
        this.room[0].xAxis = 1
        this.room[0].yAxis = 1
        for(let i = 1;i<this.room.length;i++) {
            this.room[i].xAxis = 0 + this.room[i-1].xAxis + 1 + this.room[i-1].xSize
            this.room[i].yAxis = 0 + this.room[i-1].yAxis + 1 + this.room[i-1].ySize
        }
    }
}

class Room{
    constructor(xSize, ySize) {
        this.xSize = xSize
        this.ySize = ySize
        this.contents = []
        this.xAxis = 0
        this.yAxis = 0
    }
    fillRoom (itemList) {
        for(let i = 0;i<itemList.length;i++) {
            this.contents.push(itemList[i])
        }
    }
}

let firstDungeon = new Dungeon(50, 50, ['old place'], 'rome')
firstDungeon.addRooms(5)

console.log(new Room(5, 6))
firstDungeon.arrangeRooms()
console.log(firstDungeon)