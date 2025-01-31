from flask import Flask
from constructure import *

if __name__ == "__main__":
    app = app(__name__)
    app.app_routes()
    app.app_main()
