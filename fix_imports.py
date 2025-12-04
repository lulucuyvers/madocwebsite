import os
import re



for root, dirs, files in os.walk('src'):
    for file in files:
        if file.endswith(('.tsx', '.ts')):
            filepath = os.path.join(root, file)
            with open(filepath, 'r') as f:
                content = f.read()
            
            # Remove @x.x.x version syntax
            new_content = re.sub(r'@\d+\.\d+\.\d+', '', content)
            
            if content != new_content:
                with open(filepath, 'w') as f:
                    f.write(new_content)
                print(f"Fixed: {filepath}")



