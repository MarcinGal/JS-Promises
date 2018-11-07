class UserList {
    constructor(container, number) {
        this.container = container
        this.users = []
        this.number = number
        this.init()

    }

    init() {
        this.render()
        this.fetchUsers()
    }


    fetchUsers() {

        fetch(`https://randomuser.me/api/?results=${this.number}`)
            .then(response => response.json())
            .then(data => {
                this.users = data.results
                this.render()
            })

    }

    render() {
        this.container.innerHTML = ''

        const ul = document.createElement('ul')

        this.users.forEach((user, userIndex) => {
            const li = document.createElement('li')
            const span = document.createElement('span')
            span.innerHTML = `${user.name.first} ${user.name.last}`
            span.addEventListener('click', () => alert(user.email))
            const button = document.createElement('button')
            button.innerHTML = 'x'
            button.style.padding = '0'
            button.style.marginLeft = '10px'
            button.addEventListener(
                'click',
                (e) => {
                    e.stopPropagation()
                    this.users.splice(userIndex, 1)
                    this.render()
                }
            )
            ul.appendChild(li)
            li.appendChild(span)
            li.appendChild(button)
        })

        this.container.appendChild(ul)


    }

}

const list = new UserList(document.body, 12)

