# Chapter 14 – Building Retrieval-Augmented Generation AI Chatbots

This directory contains code samples and project scaffolding for **Chapter 14** of _MongoDB 8.0 in Action_.  
It demonstrates how to build a **Retrieval-Augmented Generation (RAG)** chatbot using **MongoDB Atlas Vector Search**, **LangChain**, and **OpenAI** in a local or cloud-based Atlas deployment.

---

## 🤖 What You'll Learn

- Why **LLMs hallucinate** and how to reduce these risks
- How to architect a **RAG-based application** with Atlas Vector Search
- The role of **vector embeddings**, **indexing**, and **retrieval** in Gen AI
- How to use **LangChain**, **LangServe**, and **LangChain CLI**
- Ingesting real data (from PDFs) and embedding it into Atlas Vector Search
- Creating a LangChain project using the **`mongo-rag` template**
- Testing your chatbot with a GUI and programmatically via `curl`

---

## 🧩 Technologies Used

- **LangChain (Python)** – Framework to orchestrate RAG pipelines
- **MongoDB Atlas Vector Search** – Vector store for semantic document retrieval
- **OpenAI API** – For embedding generation and GPT model querying
- **FastAPI + LangServe** – Serve LangChain apps as REST APIs
- **Atlas CLI** – Manage and index vector collections in local/cloud clusters
- **LangChain CLI** – Scaffold and serve LangChain projects

---

## 📁 Files Included

| File / Path                                   | Description |
|-----------------------------------------------|-------------|
| `mongodb-in-action/`                          | Root directory for the LangChain application scaffolded using `rag-mongo` template |
| `mongodb-in-action/app/server.py`             | Entry point for the FastAPI server with LangServe route `/rag-mongo` |
| `mongodb-in-action/packages/rag-mongo/`       | Project template containing RAG implementation |
| `ingest.py`                                   | Loads a PDF, creates embeddings, and inserts into MongoDB Atlas |
| `rag_mongo/chain.py`                          | Defines the RAG logic, retriever, and chatbot chain |
| `vector-search.json`                          | Atlas Search index definition for `embedding` field |

---

## ✅ Requirements

- **Python 3.11+**
- **MongoDB Atlas (local or cloud)**
- **Docker** (for local Atlas)
- **OpenAI API Key**
- **MongoDB URI** (exported via `MONGO_URI`)
- **LangChain CLI** (`pip install langchain-cli`)
- **LangServe** (`pip install langserve`)
- **LangChain Python packages**:
  - `langchain`
  - `langchain-openai`
  - `langchain-mongodb`

---

## 🚀 Getting Started

```bash
# 1. Install LangChain CLI
pip install -U langchain-cli

# 2. Scaffold a new project
langchain app new mongodb-in-action --package rag-mongo

# 3. Export your keys
export OPENAI_API_KEY=<your-key>
export MONGO_URI="mongodb://localhost:27017/?directConnection=true"

# 4. Generate embeddings from MongoDB Atlas docs
cd mongodb-in-action/packages/rag-mongo
python3 ingest.py

# 5. Create vector index with Atlas CLI
atlas deployments search indexes create --file vector-search.json --type LOCAL

# 6. Run the LangChain server
cd mongodb-in-action
langchain serve
