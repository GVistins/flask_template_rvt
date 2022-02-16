from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

app = Flask('app')
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///data.db"
db = SQLAlchemy(app)

class Agenturas(db.Model):
  id = db.Column(db.Integer, primary_key = True)
  name = db.Column(db.String(100), nullable = False)
  adress = db.Column(db.String(100), nullable = False)
  added = db.Column(db.DateTime, default= datetime.utcnow)

  def __repr__(self):
    return "<Aģentūra %r>" % self.id
  
class Celojumi(db.Model):
  id = db.Column(db.Integer, primary_key = True)
  startdate = db.Column(db.String(8), nullable = False)
  enddate = db.Column(db.String(8), nullable = False)
  countryfrom = db.Column(db.String(40), nullable = False)
  countryto = db.Column(db.String(40), nullable = False)
  price = db.Column(db.Integer)
  rem_spots = db.Column(db.String(100), nullable = False)

  def __repr__(self):
    return "<Ceļojums %r>" % self.id

class Valstis(db.Model):
  id = db.Column(db.Integer, primary_key = True)
  name = db.Column(db.String(15), nullable = False)
  abbr = db.Column(db.String(5), nullable = False)

  def __repr__(self):
    return "<Valsts %r>" % self.id
  

@app.route('/')
def index():
    return render_template("index.html")


@app.route('/agenturas', methods=['POST','GET'])
def agenturas():
    return render_template("agenturas.html")


@app.route('/valstis', methods=['POST', 'GET'])
def valstis():
    return render_template("valstis.html")


@app.route("/celojumi", methods = ['POST', 'GET'])
def celojumi():
    return render_template("celojumi.html")


@app.route("/stats")
def stats():
    return render_template("stats.html")


app.run(host='0.0.0.0', port=8080)
