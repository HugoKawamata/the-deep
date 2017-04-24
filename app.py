from flask import Flask, request, json
app = Flask(__name__)

@app.route("/creature-write")
def creatureWrite():
    return app.send_static_file("template-creature.html")

@app.route("/spell-write")
def spellWrite():
    return app.send_static_file("template-spell.html")

@app.route("/creature-save", methods=['POST'])
def creatureSave():
    if request.method == 'POST':
        return request.json['name']
    else:
        return "Hi"

if __name__ == "__main__":
    #port = int(os.environ.get('PORT', 5000))
    app.run()
    