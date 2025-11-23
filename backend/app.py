from flask import Flask, send_from_directory, jsonify

app = Flask(__name__, static_folder="static")

@app.route("/api/saludo")
def saludo():
    return jsonify({"mensaje": "¡Hola desde Flask + React!"})

# Servir React
@app.route("/", defaults={"path": ""})
@app.route("/<path:path>")
def serve(path):
    if path != "" and (app.static_folder + "/" + path):
        try:
            return send_from_directory(app.static_folder, path)
        except:
            pass
    return send_from_directory(app.static_folder, "index.html")

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=80)
