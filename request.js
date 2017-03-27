module.exports = Request;

function Request(data) {
  Object.assign(this, data);

  if (this.method) {
    this.method = this.method.toLowerCase();
  }
}