from fastapi import FastAPI
from langserve import add_routes
from rag_mongo import chain as rag_mongo_chain

app = FastAPI()

# Register /rag-mongo endpoint
add_routes(app, rag_mongo_chain, path="/rag-mongo")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
