from flask import Flask, render_template
app = Flask('app')


@app.route('/')
def index():
  return render_template("index.html")


@app.route('/agenturas')
def agenturas():
  return render_template("agenturas.html")

@app.route('/valstis')
def valstis():
  return render_template("valstis.html")

@app.route("/celojumi")
def celojumi():
  return render_template("celojumi.html")

@app.route("/stats")
def stats():
  return render_template("stats.html")


app.run(host='0.0.0.0', port=8080)