class QuartrMcpServerBin < Formula
  desc "MCP server for Quartr API providing financial data and company information (binary)"
  homepage "https://github.com/gaarutyunov/quartr-mcp"
  version "1.0.0"
  license "MIT"

  on_macos do
    if Hardware::CPU.intel?
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
  end

  test do
    # Test that the binary can be invoked
    system "#{bin}/quartr-mcp-server", "--help"
  end
end
