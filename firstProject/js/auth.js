// function getAuthForm() {
//   return `
//   <form class = "mui-form" id="auth-form>"
//     <div class="mui-textfield mui-textfield--float-label">
//       <input type="email" id="email" required>
//       <label for="email">Email</label>
//     </div>
//     <div class="mui-textfield mui-textfield--float-label">
//       <input type="passwoed" id="passwoed" required>
//       <label for="passwoed">Пароль</label>
//     </div>
//     <button
//       type="submit"
//       class="mui-btn mui-btn--raised mui-btn--primary"
//     >
//       Вхід
//     </button>
//   </form>
//   `
// }

// const name = document.getElementById('name')
// const login = document.getElementById('login')
// const password = document.getElementById('password')
// const submitBtn = document.getElementById('submit')

// submitBtn.onclick = function (name, login, password) {

// const users = {
//   name:'name',
//   login:'login',
//   password:'password'
// }

// console.log(user)

// }

const name = document.getElementById('name')
const login = document.getElementById('login')
const password = document.getElementById('password')
const submitBtn = document.getElementById('submit')

const users = {};

function User(name, login, password) {
  this.name = name;
  this.login = login;
  this.password = password;
}

function createId(users) {
  return Object.keys(users).length;
}

submitBtn.onclick = function() {
  const nameUser = name.value;
  const loginUser = name.value;
  const passwordUser = name.value;

  const user = new User(nameUser, loginUser, passwordUser)

  const userId = 'User' + createId(users)
  users[userId] = user;

  console.log(users)

  alert(`${nameUser}, ви успішно пройшли реєстрацію`)
}