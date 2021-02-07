.PHONY: all clean
default_target: all

all:
	pnpm i --shamefully-hoist

clean:
	rm -rf node_modules
