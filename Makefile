
all:
	@echo "make devel or make production"

devel: sass css
	NODE_OPTIONS=--openssl-legacy-provider npx webpack --env minimize --mode development --progress 
	NODE_OPTIONS=--openssl-legacy-provider npx webpack --mode development --progress 

production: sass css
	NODE_OPTIONS=--openssl-legacy-provider npx webpack --env minimize --mode production --progress 
	NODE_OPTIONS=--openssl-legacy-provider npx webpack --mode production --progress 

css:

sass:
	@bash check-sass.sh
		
clean:
	rm -rf dist
	rm package.json
