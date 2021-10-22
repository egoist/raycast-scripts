# raycast scripts

My personal [Raycast](https://www.raycast.com/) scripts.

You need to have [Deno](https://deno.land/) installed on your machine and have the `deno` command available in system `$PATH` (for [non-login shell](https://unix.stackexchange.com/questions/38175/difference-between-login-shell-and-non-login-shell)), typically you need to run following command to create a symbolic link:

```sh
# For bash/zsh shell
sudo ln $(which deno) /usr/local/bin/deno

# For fish shell
sudo ln (which deno) /usr/local/bin/deno
```

Then clone this repo to your local machine and use it as the script directory in Raycast:

![add the directory to script directories](https://i.loli.net/2021/10/08/YuCZQGFkOaB8Kmx.jpg)

## Scripts

- [npm package](./npm-package.ts): Get the description of an npm package
- [Crypto fear & Greed Index](./crypto-fear-greed-index.ts): Get the [Crypto fear & Greed Index](https://alternative.me/crypto/fear-and-greed-index/)
- [Title](./title.ts): Capitalize your title accroding to [The Chicago Manual of Style](http://www.chicagomanualofstyle.org/).

## License

MIT.
