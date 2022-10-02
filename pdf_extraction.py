from tika import parser
raw = parser.from_file('pdfs/sample.pdf')
raw['content']