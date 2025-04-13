# Chapter 12 – Learning Semantic Techniques and Atlas Vector Search

This directory contains examples and code samples from **Chapter 12** of _MongoDB 8.0 in Action_.  
It explores **Atlas Vector Search**, the use of **embeddings**, and advanced semantic query techniques using MongoDB Atlas.

---

## 🧠 What You'll Learn

- What vector embeddings are and how they power semantic understanding
- How to create and use **Atlas Vector Search** indexes with MongoDB Atlas
- Performing semantic queries using the `$vectorSearch` aggregation stage
- Using **external models** like OpenAI to generate text embeddings
- Automating embedding creation using **Atlas Triggers**
- Writing vector search queries in:
  - `mongosh`
  - JavaScript (Node.js)
  - Python (`pymongo`)
  - Ruby (`mongo` gem)
- Configuring **pre-filters** and similarity metrics for fine-tuned results
- Tips for **optimizing performance** using dedicated Search Nodes
- How **vector search underpins modern AI techniques** like **RAG (Retriever-Augmented Generation)**, where query-relevant data is retrieved using semantic similarity and passed to large language models like GPT for more accurate, grounded responses.

---

## 📁 Files Included

| File name                  | Description |
|----------------------------|-------------|
| `create_vector_index.sh`   | Shell script that creates the Atlas Vector Search index using the Atlas CLI and the `vector-definition.json` file. |
| `vector_query.js`          | JavaScript (Node.js) script using the MongoDB driver to perform a vector search query. |
| `vector_query_with_filter.py` | Python script using `pymongo` to execute a vector search query with pre-filters applied. |
| `vector_query_with_filter.rb` | Ruby script using the `mongo` gem to perform a vector search query with category and price filters. |
| `atlas_trigger_function.js` | Atlas Trigger function (written in JavaScript) that automatically creates embeddings for new documents using the OpenAI Embeddings API. |

---

## ✅ Requirements

- **MongoDB Atlas** with M0 or higher cluster (Vector Search supported)
- **MongoDB Atlas CLI** (`atlas` command)
- **OpenAI API Key** (for embedding generation)
- External libraries or tools:
  - Node.js + `mongodb` driver
  - Python 3 + `pymongo`
  - Ruby + `mongo` gem
- Sample dataset: `sample_mflix` (with `embedded_movies` collection)
- A working `plot_embedding` vector field in your MongoDB collection

---

## ⚠️ Notes

- Atlas does not provide built-in embedding generation — use external systems like OpenAI or Hugging Face.
- The query vector **must** be created with the same model used to generate your data embeddings.
- ANN (Approximate Nearest Neighbor) is faster; use ENN (Exact Nearest Neighbor) only when precision is critical.
- Use **pre-filters** in queries to limit search scope and improve performance.
- Avoid returning large vector fields in query results unless necessary.
- Enable **Search Nodes** (on M10+ clusters) for improved parallelism and performance at scale.
