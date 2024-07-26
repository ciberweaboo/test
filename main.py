from flask import Flask

app = Flask(__name__)

@app.route('/')
def appIndex():
  return 'OK'

app.run()
