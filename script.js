let block = document.querySelector(".block")

class Section {
    constructor(img, hdr, classItem, name, discription) {
        this.img = img
        this.hdr = hdr
        this.classItem = classItem
        this.name = name
        this.discription = discription
    }
    creat() {
        let dv = document.createElement("div")
        dv.innerHTML = `<img src="${this.img}" /> <h2> ${this.hdr}</h2> <p>${this.name}</p> <span>${this.discription}</span>`
        dv.classList.add(`${this.classItem}`)
        block.append(dv)
    }
}
const sec1 = new Section("./img/Rectangle.svg", "Create an account", "picL","Create/login to an existing account to get started", "An account is created with your email and a desired password")
sec1.creat()
console.log(sec1);
const sec2 = new Section("./img/Rectangle1.svg", "Explore varieties","picR","Shop for your favorites meal as e dey hot.", "Shop for your favorite meals or drinks and enjoy while doing it.",)
sec2.creat()
const sec3=new Section("./img/Rectangle2.svg", "Checkout","picL","When you done check out and get it delivered.", "When you done check out and get it delivered with ease.",)
sec3.creat()