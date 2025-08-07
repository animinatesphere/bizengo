import React from 'react'

ecport default const AuthModal = () => (
    showAuthModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm">
            <div className="relative bg-white p-6 rounded-lg shadow-xl max-w-md w-full mx-4">
                <Button
                    onClick={() => setShowAuthModal(false)}
                    className="absolute top-3 right-3 p-1 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full"
                >
                    <X className="h-5 w-5" />
                </Button>

                <div className="text-center">
                    <h3 className="text-xl font-semibold mb-4">Save Your Documents</h3>
                    <p className="text-gray-600 mb-6">
                        Sign up or log in to automatically save your {invoiceType}s to your profile for easy access later.
                    </p>
                    
                    <div className="space-y-3">
                        <Button 
                            onClick={() => {
                                window.location.href = '/auth/signup';
                            }}
                            className="w-full"
                        >
                            <UserPlus className="h-4 w-4 mr-2" />
                            Sign Up
                        </Button>
                        
                        <Button 
                            variant="outline"
                            onClick={() => {
                                window.location.href = '/auth/login';
                            }}
                            className="w-full"
                        >
                            <LogIn className="h-4 w-4 mr-2" />
                            Log In
                        </Button>
                        
                        <Button 
                            variant="ghost"
                            onClick={handleDirectDownload}
                            className="w-full text-sm"
                        >
                            Continue without saving
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
);
