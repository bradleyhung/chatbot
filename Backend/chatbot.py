from langchain_community.document_loaders import JSONLoader
# from langchain_core.documents import Document

file_path = "file.json"
jq_schema = ".courses[]"
loader = JSONLoader(file_path=file_path, jq_schema=jq_schema, text_content=False)
documents = loader.load()

for doc in documents:
    print(doc.page_content)