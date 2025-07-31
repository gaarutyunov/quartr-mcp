class QuartrMcpServer < Formula
  desc "MCP server for Quartr API providing financial data and company information"
  homepage "https://github.com/gaarutyunov/quartr-mcp"
  url "https://github.com/gaarutyunov/quartr-mcp/archive/v1.0.0.tar.gz"
  sha256 ""
  license "MIT"
  head "https://github.com/gaarutyunov/quartr-mcp.git", branch: "main"

  depends_on "node@18" => :build
  depends_on "npm" => :build

  def install
    # Install dependencies and build
    system "npm", "ci"
    system "npm", "run", "build"
    
    # Install the built files to libexec
    libexec.install "dist", "package.json", "package-lock.json", "node_modules"
    
    # Create wrapper script in bin
    (bin/"quartr-mcp-server").write <<~EOS
      #!/bin/bash
      export NODE_PATH="#{libexec}/node_modules"
      exec "#{Formula["node@18"].bin}/node" "#{libexec}/dist/index.js" "$@"
    EOS
    
    chmod 0755, bin/"quartr-mcp-server"
  end

  test do
    # Test that the binary exists and is executable
    assert_predicate bin/"quartr-mcp-server", :exist?
    assert_predicate bin/"quartr-mcp-server", :executable?
    
    # Test version output (if your app supports --version)
    # system "#{bin}/quartr-mcp-server", "--version"
  end
end
