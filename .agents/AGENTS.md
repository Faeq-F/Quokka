# Quokka Agent Conventions & Architecture

Welcome! This is a living document that outlines the design principles, architecture, and coding conventions of the **Quokka** project to ensure consistency during development. Please review this document and update it as needed.

Please see [the documentation site](https://faeq-f.github.io/Quokka/documentation) for more detailed information.

---

## 1. Project Overview

Quokka is a customizable, portable keystroke launcher built using C# and WPF on .NET Framework 4.8. It supports a plugin architecture where plugins extend the launcher's capabilities (e.g., shell command execution, Unicode character lookup, calculator, web search, etc.)

---

## 2. Directory Structure

- `Quokka/`: The main launcher executable, window layout, and plugin hosting logic.
- `Plugin*/`: Separate directories for each distinct plugin project (e.g., `PluginCalculator/`, `PluginEverything/`).
- `BuildOutput/`: The unified output directory for all compilation artifacts.
  - `Quokka/`: Contains the main application binaries.
  - `Quokka/PlugBoard/`: Subfolder where all compiled plugin assemblies are placed.
- `Config/`: Configuration files and resources (logos, settings, icons).
- `Tests/`: Unit and integration testing project.

---

## 3. Coding & Architecture Conventions

- **Nullable Reference Types:** Modern C# nullable reference types (`<Nullable>enable</Nullable>`) are enabled. Ensure all code handles null references gracefully, using null-forgiving operators (`!`) or nullable markers (`?`) only when architecturally appropriate.
- **Win32 Interop (P/Invoke):** Keep Win32 P/Invokes tidy and isolated.
  - Use correct marshaling.
  - Ensure any keyboard hook or window focus APIs release resources properly (`IDisposable`).
  - Always mark tunneling/bubbling key events as handled (`e.Handled = true`) if they trigger a terminal action (like closing the window) to prevent propagation to background windows.
- **XML Documentation:** Standard triple-slash (`///`) XML documentation should be used for all public classes, interfaces, and methods. Do not use block comments (`/** ... */`) for XML docs.
  - Use `<see cref="TypeName"/>` cross-reference links for C# types and symbols (e.g., `<see cref="ListItem"/>`). Prefer using these code references directly in sentences when they fit grammatically (e.g., write `Parses and evaluates <see cref="VerticalAlignment"/> settings.` instead of `vertical alignment settings`).
  - Use Markdown syntax (such as backticks like `` `Quokka.exe` `` for inline code fragments, filenames, paths, or shell commands).
  - Ensure all documentation phrases (summaries, parameter descriptions, returns descriptions) end with a period.
  - Phrase summaries consistently:
    - Classes: Start with **"Represents..."** or **"Provides..."**.
    - Constructors: Use **"Initializes a new instance of the <see cref=\"TypeName\"/> class."**.
    - Properties: Start with **"Gets or sets..."** (fully accessible) or **"Gets..."** (read-only).
    - Boolean properties: Start with **"Gets or sets a value indicating whether..."** or **"Gets a value indicating whether..."**.
    - Events: Start with **"Occurs when..."**.
    - Methods: Start with a third-person singular active verb (e.g., **"Removes..."**, **"Runs..."**).
    - Method parameters: Include a `<param>` tag with a description.
      - Boolean parameters: Start with **"Specifies whether..."**.
      - Enum parameters: Start with **"Specifies..."**.
    - Method return values: Include a `<returns>` tag with a description of the returned value.
      - Boolean return values: Use the format **"<c>true</c> if CONDITION; otherwise, <c>false</c>."** inside the `<returns>` tag.
    - Exceptions: Describe the condition under which the exception is thrown inside the `<exception>` tag, referencing parameters with `<paramref name="parameterName"/>` (e.g., **"<paramref name=\"action\"/> is <see langword=\"null\"/>."**).
  - When documenting string parameters that represent configuration tokens (e.g., scorer keys or animation names), use structured lists to explicitly map the literal string values (formatted using `<c>value</c>`) to their corresponding C# types or enum members (formatted using `<see cref="TypeName"/>`).
- **Code Style & Formatting:** Adhere strictly to the rule definitions specified in [.editorconfig](../.editorconfig) (such as 2-space indentation, CRLF newlines, and PascalCase naming conventions).
- **Using Directives & Namespaces:** Always explicitly import namespaces (e.g., `using System.Windows;`) at the top of the file using `using` directives rather than using inline fully-qualified type names (e.g., write `Application.Current` or `Clipboard.SetText` after importing `using System.Windows;`) to maintain clean and concise code.
