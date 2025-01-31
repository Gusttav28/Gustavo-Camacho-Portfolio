from flask import Flask, render_template

class app:
    #----------CONSTRUCTURE-------------->
    def __init__(self, appFlask):
        self.appFlask = appFlask

        self.appFlask = Flask(__name__)

        self.index_route = "/"
        self.aboutme_route = "/aboutme"
        self.projects_route = "/projects"

        # self.app.secret_key = "30696222g"

    #<------------------------------------

    def app_main(self):
        self.appFlask.run(port=3028, debug=True)

    def app_routes(self):
        
        @self.appFlask.route(self.index_route)
        def index():
            return render_template("index.html")

        @self.appFlask.route(self.aboutme_route)
        def aboutme():
            return render_template("aboutme.html")

        @self.appFlask.route(self.projects_route)
        def projects():
            return render_template("projects.html")