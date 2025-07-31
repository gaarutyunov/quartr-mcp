#!/usr/bin/env node

/**
 * Simple test script to demonstrate the Quartr MCP Server
 * This script shows how the server would be used in practice
 */

const { QuartrAPIClient } = require('./dist/quartr-api.js');

async function testQuartrAPI() {
  // This would normally come from environment variable
  const apiKey = process.env.QUARTR_API_KEY || 'your-api-key-here';
  
  if (apiKey === 'your-api-key-here') {
    console.log('⚠️  Please set QUARTR_API_KEY environment variable to test the API');
    console.log('   Example: export QUARTR_API_KEY="your-actual-api-key"');
    console.log('');
    console.log('📚 MCP Server is ready! Here\'s how to use it:');
    console.log('');
    console.log('1. Set your API key: export QUARTR_API_KEY="your-key"');
    console.log('2. Start the server: npm start');
    console.log('3. Connect your MCP client to use the available tools');
    console.log('');
    console.log('🔧 Available MCP tools:');
    console.log('   - quartr_list_companies');
    console.log('   - quartr_get_company');
    console.log('   - quartr_list_events');
    console.log('   - quartr_get_event');
    console.log('   - quartr_get_event_summary');
    console.log('   - quartr_list_transcripts');
    console.log('   - quartr_get_transcript_summary');
    console.log('   - and many more...');
    return;
  }

  try {
    const client = new QuartrAPIClient(apiKey);
    
    console.log('🚀 Testing Quartr API connection...');
    
    // Test getting companies
    console.log('📊 Fetching companies...');
    const companies = await client.getCompanies({ limit: 3 });
    console.log(`   Found ${companies.data.length} companies`);
    
    if (companies.data.length > 0) {
      const company = companies.data[0];
      console.log(`   Sample company: ${company.name} (${company.country})`);
      
      // Test getting events for this company
      console.log('📅 Fetching events...');
      const events = await client.getEvents({ 
        companyIds: company.id.toString(), 
        limit: 2 
      });
      console.log(`   Found ${events.data.length} events for ${company.name}`);
    }
    
    console.log('✅ API test successful! MCP server is ready to use.');
    
  } catch (error) {
    console.error('❌ API test failed:', error.message);
    console.log('');
    console.log('💡 Common issues:');
    console.log('   - Invalid API key');
    console.log('   - Network connectivity problems');
    console.log('   - API rate limiting');
  }
}

if (require.main === module) {
  testQuartrAPI();
}
