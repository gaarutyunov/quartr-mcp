class QuartrMcpServer < Formula
  desc "MCP server for Quartr API providing financial data and company information"
  homepage "https://github.com/gaarutyunov/quartr-mcp"
  url "https://github.com/gaarutyunov/quartr-mcp/archive/v1.0.0.tar.gz"
  sha256 ""
  license "MIT"

  depends_on "node@18"

  def install
    system "npm", "install", *Language::Node.local_npm_install_args
    system "npm", "run", "build"
    
    # Install the built JavaScript files
    libexec.install Dir["dist/*"]
    libexec.install "package.json"
    
    # Create a wrapper script
    (bin/"quartr-mcp-server").write <<~EOS
      #!/bin/bash
      exec "#{Formula["node@18"].bin}/node" "#{libexec}/index.js" "$@"
    EOS
  end

  test do
    # Test that the binary can be invoked
    system "#{bin}/quartr-mcp-server", "--help"
  end
end
