
all:
	@echo "make devel or make production"

devel: sass
	NODE_OPTIONS=--openssl-legacy-provider npx webpack --env minimize --env development --progress 
	NODE_OPTIONS=--openssl-legacy-provider npx webpack --env development --progress 

production: sass
	NODE_OPTIONS=--openssl-legacy-provider npx webpack --env minimize --env production --progress 
	NODE_OPTIONS=--openssl-legacy-provider npx webpack --env production --progress 


sass:
	@bash check-sass.sh
		
clean:
	rm -rf dist
	rm package.json
