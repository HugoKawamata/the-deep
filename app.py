from flask import Flask
app = Flask(__name__)

@app.route("/creature-write")
def creatureWrite():
    return app.send_static_file("template-creature.html")

@app.route("/spell-write")
def spellWrite():
    return app.send_static_file("template-spell.html")

if __name__ == "__main__":
    #port = int(os.environ.get('PORT', 5000))
    app.run()
    