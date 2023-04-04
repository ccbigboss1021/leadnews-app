function Api() {
  this.vue
}
Api.prototype = {
  setVue: function (vue) {
    this.vue = vue
  },
  // 登录
  login: function (data) {
    let url = this.vue.$config.urls.get('user_login')
    return this.vue.$request.postByEquipmentId(url, data)
  },

  // 注册
  register: function (data) {
    return this.vue.$request.postByEquipmentId('/api/v1/login/register', data)
  },
}

export default new Api()
