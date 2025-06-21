<template>
  <h1>
    <UIcon name="i-lucide-circle-help" /> FAQ by Developers
  </h1>
  <div>
    How do I use a 3rd party library in my plugin?

    You must install the package (likely through nuget) for your
    plugin's
    project. Unfortunately this is not enough since Quokka will need the
    package
    reference of the library. You will have to use <a
      href="https://learn.microsoft.com/en-us/dotnet/fundamentals/reflection/reflection">reflection</a>
    to
    load the
    library at runtime and use the classes it provides. You can have a
    look
    at
    the following plugins as examples as to how to do this:
    <ul>
      <li><a href=''>Plugin_Calculator</a></li>
      <li><a href=''>Plugin_EnglishDictionary</a></li>
      <li><a href=''>Plugin_Everything</a></li>
    </ul>
  </div>
</template>