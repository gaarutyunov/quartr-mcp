class QuartrMcpServerBin < Formula
  desc "MCP server for Quartr API providing financial data and company information (binary)"
  homepage "https://github.com/gaarutyunov/quartr-mcp"
  version "1.0.0"
  license "MIT"

  on_macos do
    if Hardware::CPU.intel?
      url "https://github.com/gaarutyunov/quartr-mcp/releases/download/v1.0.0/index-macos"
      sha256 ""
    elsif Hardware::CPU.arm?
      url "https://github.com/gaarutyunov/quartr-mcp/releases/download/v1.0.0/index-macos"
      sha256 ""
    end
  end

  on_linux do
    if Hardware::CPU.intel?
      url "https://github.com/gaarutyunov/quartr-mcp/releases/download/v1.0.0/index-linux"
      sha256 ""
    end
  end

  def install
    if OS.mac?
      bin.install "index-macos" => "quartr-mcp-server"
    elsif OS.linux?
      bin.install "index-linux" => "quartr-mcp-server"
    end
    
    # Make sure the binary is executable
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
