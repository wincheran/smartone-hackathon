import pymongo
import datetime
from flask import Flask
from flask import request
from datetime import datetime

app = Flask(__name__)
client = pymongo.MongoClient("mongodb://wonyoung:-@localhost/smartonedb")
db = client.smartonedb

@app.route("/")
def hello():
    return "Hello Smartone!";


@app.route("/flaw")
def flawType():
        flaw = request.args.get('type')
        flaws = db.flaw
        flawJson = {"flaw":flaw,"date":datetime.now()}
        flaws.insert_one(flawJson)
        return "good"


@app.route("/flaw-count")
def flawCount():
    dbcount = db.flaw.count()
    return str(dbcount);


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=90)