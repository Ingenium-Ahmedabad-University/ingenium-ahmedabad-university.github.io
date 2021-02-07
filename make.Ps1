$cmd = $args[0]

if ($cmd -eq "install") {
    pnpm i --shamefully-hoist
}
elseif ($cmd -eq "clean") {
    rmdir /s node_modules
}
