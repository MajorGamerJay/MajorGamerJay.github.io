# fread()

My friend recently wanted a demonstration and a simple explanation of fread() function in C and when I checked the manual, it was pretty hard to understand for a beginner programmer. So, I am going to give a short definition and example here that could be useful to you.

### Synopsis

This is the format in which fread() can be used.

```
       #include <stdio.h>

       size_t fread(void *restrict ptr, size_t size, size_t nmemb,
                    FILE *restrict stream);
```

### What is it?

This function is used read data from a file pointed by a `FILE` pointer. The function usually takes arguments like this,

```
fread(pointer to a buffer,
      size of bytes per item in the buffer,
      size of the amount of bytes to be collected from the file to the buffer,
      pointer to the file)
```

This returns a `size_t` or you can just call it an `int` with the amount of data read from the file. If it didn't read data amounting equal to `nmemb` that means there must've been something wrong while reading. Fix it!

### Example

test.txt: beautiful

fread.c:

```
    #include <stdio.h>

    int
    main(void)
    {
        char buf[2];
        FILE *file = fopen("test.txt", "r");

        int ret = fread(buf, 1, 2, file);
        printf("%s\n", buf);

        fclose(file);
    }
```

Here, fread reads 2 bytes from `file` and stores it in `buf`. Per item in `buf` equals to exactly `1` byte since it is an array of `char`.

Output of the program: `be`. Which is the first two bytes in the file.

Do not forget to close the `FILE` pointer after the work is done! This is a good practice and can save a large program from boatloads of vulnerabilities.

Materials and information taken from linux man-pages project.
