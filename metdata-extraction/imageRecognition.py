import pytesseract
from PIL import Image
from PIL.ExifTags import TAGS
from flask import Flask, request, jsonify
from flask_cors import CORS
import os
app = Flask(__name__)
CORS(app)
UPLOAD_FOLDER = 'uploads/'
if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['MAX_CONTENT_LENGTH'] = 16*1024*1024
pytesseract.pytesseract.tesseract_cmd = "C:\\Program Files\\Tesseract-OCR\\tesseract.exe"  
   
def get_image_metadata(file_path):
  try:
    image = Image.open(file_path)
    exifdata = image.getexif()
  except FileNotFoundError:
    print(f"Error: File not found at '{file_path}'.")
    return None
  if exifdata:
    metadata = {}
    for tagid in exifdata:
      tagname = TAGS.get(tagid, tagid)
      value = exifdata.get(tagid)
      metadata[tagname] = value
    return metadata
  else:
    print("Image does not contain any EXIF data.")
    return None

def get_text_from_image(file_path):
    try:
      image = Image.open(file_path)
      image = Image.open(file_path)
    except FileNotFoundError:
      print("Error: Image file not found.")
      exit()
# Perform OCR using PyTesseract
    text = pytesseract.image_to_string(image)
    return text
def filter_text_to_numeric(text):
  return ''.join(char for char in text if char.isdigit())
@app.route('/process_image', methods=['POST'])
def process_image():
    
    text_fields = request.form.to_dict()
    file = request.files['image']
    print(file)
    print(f"Received data: {text_fields}")
    if file:
        filename = file.filename
        filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        print(filepath)
        file.save(filepath)
        print(f"File saved at '{filepath}'")
        metadata = get_image_metadata(filepath)
        text = get_text_from_image(filepath)
        print(text)
        text = filter_text_to_numeric(text)
        print(metadata)
        dateTime=metadata.get('DateTime')
        text_fields['image'] = filepath  # Save or process the file path as needed
        return jsonify({
        'message': 'Data received successfully',
        'aadhar_no': text,
        'dateTime': dateTime

})

if __name__ == '__main__':
    app.run(debug=True)
